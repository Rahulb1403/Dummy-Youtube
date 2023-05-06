import React from "react"

const commentsData = [
  {
    name: "Rahul Bansal",
    text: "My comment",
    replies: [],
  },
  {
    name: "Rahul Bansal",
    text: "My comment",
    replies: [
      {
        name: "Rahul Bansal",
        text: "My comment",
        replies: [],
      },
      {
        name: "Rahul Bansal",
        text: "My comment",
        replies: [
          {
            name: "Rahul Bansal",
            text: "My comment",
            replies: [],
          },
          {
            name: "Rahul Bansal",
            text: "My comment",
            replies: [
              {
                name: "Rahul Bansal",
                text: "My comment",
                replies: [
                  {
                    name: "Rahul Bansal",
                    text: "My comment",
                    replies: [
                      {
                        name: "Rahul Bansal",
                        text: "My comment",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rahul Bansal",
    text: "My comment",
    replies: [],
  },
  {
    name: "Rahul Bansal",
    text: "My comment",
    replies: [],
  },
]

const Comment = ({ data }) => {
  const { name, text, replies } = data
  return (
    <div className="flex p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

const CommentsList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="pl-5S  ml-12">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
}

const CommentContainer = () => {
  return (
    <div className="px-2 border">
      {/* <h1 className="text-2xl font-bold">Comment:</h1> */}
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentContainer
