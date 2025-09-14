import Profile from "@/components/Profile";


const ProfilePage = () => {
    return (
        <>
            <section className="pt-44!">
                <div className=" container mx-auto max-w-540  rounded-2xl shadow-auth dark:shadow-dark-auth">
                    <Profile />
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
