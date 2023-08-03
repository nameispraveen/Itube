import React, { useEffect, useState } from "react";
import search from "./search.module.css";
import Layout from "./Layout";
export default function Search() {
  const [searchtext, setsearchtext] = useState(null);
  const [passjson, setpassjson] = useState(false);
  const [SearchResults, setSearchResults] = useState(null);
  function searchfunction() {
    setpassjson(true);
  }
  useEffect(() => {
    searchtext ? fetchData() : null;
  }, [passjson]);
  const fetchData = async () => {
    const apiKey = "AIzaSyBXdepFjMS6MG41OrLjLOo2MEwrsb5EZmk";
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(
      searchtext
    )}&type=video&part=snippet&maxResults=18`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response?.json();
      setSearchResults(data?.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search .."
        onChange={(e) => setsearchtext(e.target.value)}
      />
      <button onClick={searchfunction}>Submit</button>
      <hr />
      {passjson ? <Layout SearchResults={SearchResults}/> : null}
    </div>
  );
}
