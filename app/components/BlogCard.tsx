import { FC } from "react";

const BlogCard: FC<{
  blogPost: {
    meta:{

    image: string;
    description: string;
    title: string;
    category: string;
    }
  };
}> = ({ blogPost }) => (
  <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
    <a href="#" className="w-full block h-full">
      <img
        alt="blog photo"
        src={blogPost.meta.image}
        className="max-h-40 w-full object-cover"
      />
      <div className="bg-white dark:bg-gray-800 w-full p-4">
        <p className="text-indigo-500 text-md font-medium">
          {blogPost.meta.category}
        </p>
        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
          {blogPost.meta.title}
        </p>
        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
          {blogPost.meta.description}
        </p>
      </div>
    </a>
  </div>
);

export default BlogCard;
