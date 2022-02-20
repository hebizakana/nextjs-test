import Link from "next/link";
const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      {":"}
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <a className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </a>
      </Link>
    </div>
  );
};

export default Post;
