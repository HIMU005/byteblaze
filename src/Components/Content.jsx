import { useLoaderData } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const {
        title,
        cover_image,
        tags,
        body_html,
    } = blog;
    return (
        <div rel="noopener noreferrer" className=" mx-auto group p-2 border-2  border-opacity-30 hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500" src={cover_image || placeHolderImage} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
                {
                    tags.map((tag, idx) => (
                        <a key={idx} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">#{tag}</a>
                    ))
                }
            </div>

            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;