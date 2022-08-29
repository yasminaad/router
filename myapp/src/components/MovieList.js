import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ListsMovies } from "./ListsMovies";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import Filter from "./Filter";
import "./MovieList.css";

const MovieList = () => {
  const [listMovies, setListMovies] = useState(ListsMovies);
  const [show, setshow] = useState(false);
  const [searchinput, setsearchinput] = useState("");
  const [searchrate, setSearchrate] = useState(1);

  const addMovie = (newmovie) => {
    setListMovies([...listMovies, newmovie]);
    setshow(false);
  };

  const onOpenModal = () => {
    setshow(true);
  };

  const onCloseModal = () => {
    setshow(false);
  };

  const updateinput = (search) => {
    setsearchinput(search);
  };

  const updaterate = (number) => {
    setSearchrate(number);
  };

  const displayMovies = () => {
    let filtredMovies = [];
    if (
      searchinput === "" ||
      (searchinput !== "" && parseInt(searchrate) === 0)
    ) {
      filtredMovies = listMovies.filter((mov) => {
        return mov.title.toLowerCase().includes(searchinput.toLowerCase());
      });
    }
    if (searchinput !== "" && parseInt(searchrate) !== 0) {
      filtredMovies = listMovies.filter((mov) => {
        return (
          mov.title.toLowerCase().includes(searchinput.toLowerCase()) &&
          mov.rate >= parseInt(searchrate)
        );
      });
    }
    if (searchinput === "" && parseInt(searchrate) > 0) {
      console.log(true);
      filtredMovies = listMovies.filter((mov) => {
        return mov.rate >= parseInt(searchrate);
      });
    }

    if (filtredMovies.length !== 0) {
      return filtredMovies.map((movie) => {
        return <MovieCard movie={movie} key={movie.id} />;
      });
    } else {
      return (
        <h1 style={{ color: "white", marginTop: "220px", padding: "10px" }}>
          There is no movies Please try again ...
        </h1>
      );
    }
  };

  const star = () => {
    return listMovies.filter((el) => el.rate >= searchrate)
  }

  return (
    <>
      <Filter updateinput={updateinput} updaterate={updaterate} />
      <div className="List-container">
        <div className="List-movies">{displayMovies()}</div>
        {/* <div className="List-movies"> {star} </div> */}
        <div className="add-Movie">
          <button className="add-btn" onClick={onOpenModal}>
            Add new Movie
          </button>
        </div>
        <Modal open={show} onClose={onCloseModal} center>
          <AddMovie addMovie={addMovie} />
        </Modal>
      </div>
    </>
  );
};

export default MovieList;