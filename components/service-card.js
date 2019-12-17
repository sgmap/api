import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { getAPI } from "../utils/api";

const ServiceCard = ({ slug, title, description, api, screenshot }) => {
  const [apiList, setApiList] = useState([]);
  const url = `/service/${slug}`;

  useEffect(() => {
    const getAPIs = async () => {
      const apiList = await Promise.all(api.map(id => getAPI(id)));
      setApiList(apiList);
    };

    if (api) {
      getAPIs();
    }
  }, [api]);

  return (
    <div className="ui card">
      <div className="content">
        <h3>
          <Link href={url}>
            <a className="header">{title}</a>
          </Link>
        </h3>
        <div className="meta">{description}</div>
      </div>
      <div className="image">
        <div>
          <a href={url}>
            <img
              src={`/static/images/service-screenshot/${screenshot}`}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="extra content">
        API utilisée{api.length > 1 ? "s" : ""}&nbsp;:&nbsp;
        {apiList.map(({ slug, title }) => (
          <Link key={slug} href={`/api/${slug}`}>
            <a className="ui label">{title}</a>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .image div {
          overflow: hidden;
          margin: 3% 5%;
          height: 15em;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

ServiceCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  api: PropTypes.array.isRequired
};

export default ServiceCard;