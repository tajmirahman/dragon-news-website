import { FaRegStar, FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-4 border rounded-xl">
      <div className="flex items-center gap-3">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{news.author.name}</h3>
          <p className="text-xs text-gray-500">
            {new Date(news.author.published_date).toDateString()}
          </p>
        </div>
      </div>
      <h2 className="mt-3 text-lg font-bold text-gray-900">{news.title}</h2>
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-48 object-cover rounded-lg mt-3"
      />
      <p className="mt-2 text-sm text-gray-600">{news.details.slice(0, 100)}...</p>
      <Link to={'/news.id'} className="text-primary font-medium mt-2 block">
        Read More
      </Link>
      <div className="mt-4 flex justify-between items-center text-gray-600 text-sm">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span>{news.rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FiEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
