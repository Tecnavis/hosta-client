"use client";
import { useState, useEffect, useContext } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthDialogContext from "@/app/context/AuthDialogContext";
import Logo from "@/components/Layout/Header/BrandLogo/Logo";
import { userOtp, userSignin } from "@/api/Api"; // your backend API calls

const Signin = ({ signInOpen }: { signInOpen?: any }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const authDialog = useContext(AuthDialogContext);

  // states
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timer, setTimer] = useState(0);
  const [resendCount, setResendCount] = useState(0);

  // ✅ Phone validation
  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone is required"),
  });

  // ✅ Handle phone submit
  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const res: any = await userSignin(values);

      if (res?.error) {
        toast.error("Invalid phone number");
      } else {
        toast.success("OTP sent successfully!");
        setPhoneNumber(values.phone); // save phone for OTP verification
        setOtpStep(true); // show OTP input
        setTimer(4); // start timer
        setResendCount(1); // first attempt already done
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ Resend OTP
  const handleResendOtp = async () => {
    if (resendCount >= 3) return; // max limit reached
    try {
      const res: any = await userSignin({ phone: phoneNumber });
      if (res?.error) {
        toast.error("Failed to resend OTP");
      } else {
        toast.success("OTP resent successfully!");
        setTimer(15); // restart timer
        setResendCount((prev) => prev + 1);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  // ✅ Timer countdown
  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // ✅ Handle OTP input
  const handleOtpChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // only digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next box automatically
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // ✅ Handle backspace navigation
  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  // ✅ Handle paste (full OTP)
  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("Text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      const digits = pasteData.split("");
      setOtp(digits);
      // focus last box
      const lastInput = document.getElementById("otp-5");
      lastInput?.focus();
    }
  };

  // ✅ Submit OTP
  const handleOtpSubmit = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 6) {
      toast.error("Enter full 6-digit OTP");
      return;
    }
    try {
      const payload = {
        phone: phoneNumber,
        otp: enteredOtp,
      };

      const response = await userOtp(payload);

      if (response.status == 200) {
        localStorage.setItem(
          "user",
          JSON.stringify(response?.data?.userDetails)
        );
        toast.success("OTP Verified");
        router.push("/");
      } else {
        toast.error("Invalid OTP");
      }
    } catch (err) {
      toast.error("Invalid OTP");
    }
  };

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <>
      <div className="mb-10 text-center flex justify-center">
        <Logo />
      </div>

      {!otpStep ? (
        // 🔹 Step 1: Enter phone
        <Formik
          initialValues={{ phone: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-[22px]">
                <Field
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-black/10 dark:border-white/20 bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-gray-300 focus:border-primary dark:text-white dark:focus:border-primary"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-9">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-2xl border border-primary bg-primary hover:bg-transparent hover:text-primary px-5 py-3 text-base text-white transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending OTP..." : "Send OTP"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        // 🔹 Step 2: OTP input
        <div>
          <h3 className="text-center text-lg font-semibold mb-4">
            Enter OTP sent to {phoneNumber}
          </h3>
          <div className="flex justify-center gap-2 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                onPaste={handleOtpPaste}
                className="w-12 h-12 text-center text-lg border border-gray-400 rounded-lg focus:border-primary focus:outline-none"
              />
            ))}
          </div>
          <button
            onClick={handleOtpSubmit}
            className="flex w-full items-center justify-center rounded-2xl border border-primary bg-primary hover:bg-transparent hover:text-primary px-5 py-3 text-base text-white transition disabled:opacity-50"
          >
            Verify OTP
          </button>

          {/* 🔹 Timer + Resend OTP */}
          <div className="text-center mt-4">
            {timer > 0 ? (
              <p className="text-gray-500">Resend OTP in {timer}s</p>
            ) : resendCount < 3 ? (
              <button
                onClick={handleResendOtp}
                className="text-primary underline mt-2"
              >
                Resend OTP
              </button>
            ) : (
              <p className="text-red-500 mt-2">Resend limit reached</p>
            )}
          </div>
        </div>
      )}

      {/* Forgot password */}
      {!otpStep && (
        <div className="text-center mt-4">
          {/* <Link
            href="/forgot-password"
            className="text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
          >
            Forget Password?
          </Link> */}
        </div>
      )}

      {/* Footer */}
      {!otpStep && (
        <p className="text-body-secondary text-base text-center mt-2">
          Not a member yet?{" "}
          <Link href="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      )}
    </>
  );
};

export default Signin;
