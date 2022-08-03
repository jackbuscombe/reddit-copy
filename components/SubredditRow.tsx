import { ChevronUpIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Avatar from "./Avatar";

type Props = {
	topic: String;
	index: number;
};

function SubredditRow({ index, topic }: Props) {
	const router = useRouter();

	return (
		<div className="flex items-center space-x-2 border-t bg-white px-4 py-2 last:rounded-b">
			<p>{index + 1}</p>
			<ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green-400" />
			<Avatar seed={`${topic}`} />
			<p onClick={() => router.push(`/subreddit/${topic}`)} className="flex-1 truncate hover:font-semibold cursor-pointer">
				r/{topic}
			</p>
			<Link href={`/subreddit/${topic}`}>
				<div className="cursor-pointer rounded-full bg-blue-500 px-3 text-white">View</div>
			</Link>
		</div>
	);
}
export default SubredditRow;
