import PostCard from "../components/PostCard";
import { posts } from "../../../public/dashboard.Related";

const ManagePost = () => {

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-slate-800 animate-gradient-text">
        Manage Posts
      </h1>

      {/* Card layout for posts */}
      <PostCard posts={posts} />
    </div>
  );
};

export default ManagePost;
