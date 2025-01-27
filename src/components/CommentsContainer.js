import React from 'react'


// const commentsData = [
//   {
//     name: "Sameer",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
//   },
//   {
//     name: "Sameer",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
//   },
//   {
//     name: "Sameer",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     replies: [
//       {
//         name: "Sameer",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
//       },
//       {
//         name: "Sameer",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
//       }
//     ] 
//   },
//   {
//     name: "Sameer",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     replies: [
//         {
//           name: "Sameer",
//           text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
//         },
//         {
//           name: "Sameer",
//           text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//           replies: [
//             {
//               name: "Sameer",
//               text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
//             },
//             {
//               name: "Sameer",
//               text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
//             }
//           ]
//         }
//     ]
//   },
//   {
//     name: "Sameer",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
//   }
// ]

const commentsData = [
  {
    name: "S S",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "S S",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "S S",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "S S",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "S S",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "S S",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "S S",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "S S",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "S S",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
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
  {
    name: "S S",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "S S",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "S S",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "S S",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

//data is comment we will pass
const  Comment = ({ data }) => {
  // const {name, text, replies} = data;
  const {name, text} = data;
  return (
  <div className='p-2 flex bg-gray-100 rounded-md my-2'>
    <img 
    className='w-7 h-7'
    alt="user" 
    src="https://banner2.cleanpng.com/20180622/tqt/aazen4lhc.webp" />
    <div className='px-3'>
      <p className='font-bold'>{name}</p>
      <p>{text}</p>
      {/* <p>{replies}</p> */}
    </div>
  </div>
  )
}

const CommentsList = ({comments}) => {
  //Disclaimer - Dont use index as keys
  return comments.map((comment, index) => 
    <div key={index} >
    <Comment data={comment} />
    
        {/* Replies are again list of comments again*/}
        <div className='pl-5 border border-l-black ml-5'>
        {/* <Comment key={index} data={comment} />
        <Comment key={index} data={comment} /> */}
        {/* Recursion in components */}
          <CommentsList comments={comment.replies} />
        </div>
      </div>
  );
}

const CommentsContainer = () => {
  return (
    <div className='m-2 p-2'>
      <h1 className='text-2xl font-bold'>Comments:  </h1>
      {/* <Comment data={commentsData[0]}/>  */}
      <CommentsList comments = {commentsData} />
    </div>
  );
};

//
export default CommentsContainer


/*
How comments will be structured

as it is nested so one comment then other comment ->
 comments -> array of multiple object 
 name: "",
 text - "lorem.....""
 reply is again the same data structure

 //for replies to show we will use recursion
*/
