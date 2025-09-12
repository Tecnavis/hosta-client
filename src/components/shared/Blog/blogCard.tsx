import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
  const { title, coverImage, date, slug, tag } = blog;

  return (
    <Link
      href={`/blogs/${slug}`}
      aria-label={`Read ${title}`}
      className="group block space-y-2"
    >
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={coverImage!}
          alt={"image"}
          className="transition group-hover:scale-110"
          width={500}
          height={300}
          style={{ width: "100%", height: "auto" }}
          unoptimized
        />
      </div>

      <h3 className="text-lg md:text-xl font-medium text-dark dark:text-white group-hover:text-primary">
        {title}
      </h3>

      <span className="block text-sm font-normal dark:text-white/50 text-dark/50">
        {format(new Date(date), "MMM dd, yyyy")}
      </span>

      <div className="inline-block py-1.5 px-4 bg-dark/5 rounded-full dark:bg-white/15">
        <p className="text-xs font-semibold text-dark dark:text-white">{tag}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
