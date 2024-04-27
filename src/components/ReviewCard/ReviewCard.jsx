import React from "react";
import StarRatings from "react-star-ratings";

function Bar({ rating }) {
  return (
    <StarRatings
      rating={rating}
      starDimension="16px"
      starSpacing="2px"
      starRatedColor="orange"
    ></StarRatings>
  );
}

export default function ReviewCard({ rating, heading, reviewText, account }) {
  return (
    <div className="review-card">
      <Bar rating={rating} />
      <h3 className="review-card__heading">{heading}</h3>
      <p className="review-card__text">{reviewText}</p>
      <div className="review-card__account">
        <img className="review-card__account-img" src={account.avatar} alt="" />
        <div className="account__textbox">
          <p className="review-card__account-name">{account.name}</p>
          <p className="review-card__account-nickname">{account.nickname}</p>
        </div>
      </div>
    </div>
  );
}
