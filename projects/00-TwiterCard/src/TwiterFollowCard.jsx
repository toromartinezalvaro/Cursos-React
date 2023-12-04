import { useState } from "react";
import PropTypes from 'prop-types';
import "./App.css";

export function TwiterFollowCard({
  userName = "unknown",
  children,
  initialIsFollowing
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={`El avatar de ${userName}`}
        />

        <div className="tw-followCard-info">
          <strong className="tw-followCard-userName">{children}</strong>

          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button 
        className={buttonClassName}
        onClick={handleClick}
        >
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

TwiterFollowCard.propTypes = {
  userName: PropTypes.string,
  children: PropTypes.object,
  initialIsFollowing: PropTypes.bool
}
