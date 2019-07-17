import React from 'react'
import { css } from 'emotion'

export const SkeletonLine = () => {
  return (
    <div className={s}>
      <div className="skeletonLine" />
    </div>
  )
}

const s = css`
  .skeletonLine {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 1.5ch;
    margin-bottom: 1ex;
    background: #ccc;
    border-radius: 10px;
  }
  .skeletonLine::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #ccc, #dedede, #ccc);
    animation: progress 1s ease-in-out infinite;
  }
  @keyframes progress {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
`

