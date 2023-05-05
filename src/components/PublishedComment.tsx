import React, { RefObject, useEffect } from "react";
import { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";
import { Comment } from "../pageblox";
import { useOutsideClick } from "../utils/hooks";
import { createPortal } from "react-dom";

interface PublishedCommentProps {
  block: Comment;
  pageRef: RefObject<HTMLElement>;
  setSelectedComment: (comment: Comment | null) => void;
  showReplies: (id: string) => void;
  shouldHideLabel?: boolean;
  isSelectedComment?: boolean;
  setShowCommentView: (showCommentView: boolean) => void;
}

export const PublishedComment = ({
  block,
  pageRef,
  setSelectedComment,
  showReplies,
  shouldHideLabel = false,
  isSelectedComment = false,
  setShowCommentView,
}: PublishedCommentProps): JSX.Element => {
  const { id, profileColor, profileName, dom, x, y } = block || {};
  const [domElement, setDomElement] = useState<HTMLElement | null>(null);
  const ref = useOutsideClick(() => {
    setSelectedComment(null);
    setShowCommentView(false);
  }, pageRef);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.COMMENT,
      item: { id, domElement, x, y },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, domElement, x, y]
  );

  const handleRepliesClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();

    showReplies(id);
  };

  useEffect(() => {
    const targetElement = document.evaluate(
      dom,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue as HTMLElement;

    console.log("Target element", targetElement);

    if (targetElement) {
      targetElement.classList.add("tw-relative");
      setDomElement(targetElement);

      return () => {
        targetElement.classList.remove("tw-static");
      };
    }
  }, [dom]);

  if (isDragging) {
    return <div ref={drag} />;
  }

  return domElement ? (
    createPortal(
      <div
        id={id}
        ref={drag}
        style={{
          position: "absolute",
          left: x,
          top: y,
          cursor: "default",
          zIndex: 25,
        }}
        onClick={handleRepliesClick}
      >
        <div ref={ref} className="tw-flex tw-gap-2">
          <span
            className={`${
              isSelectedComment ? "tw-w-12 tw-h-12" : "tw-w-8 tw-h-8"
            } tw-flex tw-items-center tw-justify-center tw-shadow ${
              shouldHideLabel ? "tw-opacity-50" : "tw-opacity-100"
            }`}
            style={{ borderRadius: "50%", backgroundColor: profileColor }}
          >
            <p
              className={`tw-text-white tw-font-semibold tw-uppercase ${
                isSelectedComment ? "tw-text-2xl" : "tw-text-xl"
              }`}
            >
              {profileName.charAt(0)}
            </p>
          </span>
        </div>
      </div>,
      domElement
    )
  ) : (
    <></>
  );
};
