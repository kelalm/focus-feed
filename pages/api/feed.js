export default (req, res) => {
  const feed = [
    {
      text: "Learn a new cooking recipe.",
      author: { username: "Greg Johnson" },
    },
    {
      text: "Come up with ideas for my new website.",
      author: { username: "Samantha Lamp" },
    },
  ];
  res.json(feed);
};
