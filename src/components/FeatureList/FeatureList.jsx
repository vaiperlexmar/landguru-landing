import React from "react";

export default function FeatureList({ items, listName }) {
  const renderList = items.map((item) => {
    const { name, description, img } = item;

    return (
      <li className={`${listName}__feature`} key={name}>
        <img className={`${listName}__feature-icon`} src={img} alt="" />
        <h4 className={`${listName}__feature-heading heading-fourth`}>
          {name}
        </h4>
        <p className={`${listName}__feature-text paragraph`}>{description}</p>
      </li>
    );
  });

  return <ul className={`${listName}__feature-list`}>{renderList}</ul>;
}
