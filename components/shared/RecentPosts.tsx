import Link from "next/link";
import { posts } from "@/constants/posts";

export default function RecentPosts() {
  return (
    <section className="px-4 lg:px-8 mt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">Recent posts</h2>
          <Link href="/projects" className="text-sm text-gray-300 hover:text-white">See work →</Link>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {posts.map((p) => (
            <div key={p.title} className="col-span-12 md:col-span-4">
              <Link href={p.href} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <div className="text-white font-medium">{p.title}</div>
                <div className="text-xs text-gray-400 mt-1">{new Date(p.date).toLocaleDateString()}</div>
                <p className="text-sm text-gray-300 mt-3 leading-relaxed">{p.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


