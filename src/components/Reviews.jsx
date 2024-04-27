import ReviewCard from "./ReviewCard/ReviewCard";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Reviews() {
  const {
    data: reviews,
    error,
    isValidating,
  } = useSWR("http://localhost:3001/reviews", fetcher);

  if (error) return <div className="error">Failed to load</div>;
  if (isValidating) return <div className="loading">Loading...</div>;

  return (
    <section className="reviews">
      <p className="subtitle">Testimunial</p>
      <h3 className="heading-tertiary">Meet Client Satisfaction</h3>

      {reviews &&
        reviews.map((review, index) => <ReviewCard key={index} {...review} />)}
    </section>
  );
}
