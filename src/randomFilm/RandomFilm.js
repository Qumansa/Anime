import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useGhibliService from '../service/GhibliService';
import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

import getRandomId from '../utils/getRandomId';

import './randomFilm.sass';

let idsList = [];

const RandomFilm = () => {
	const { error, getFilm, getFilms, loading, setLoading } = useGhibliService();
	const [film, setFilm] = useState({});

	const onFilmLoaded = (film) => {
		setFilm(film);
		setLoading(false);
	};

	const updateFilm = () => {
		if (idsList.length <= 0) {
			getFilms().then((films) => {
				idsList = films.map((film) => film.id);

				getFilm(getRandomId(idsList)).then(onFilmLoaded);
			});
		} else {
			getFilm(getRandomId(idsList)).then(onFilmLoaded);
		}
	};

	useEffect(() => {
		updateFilm();
	}, []);

	const { description, id, image, originalTitle, title } = film;

	const shortDescription = description && description.length > 225 ? `${description.slice(0, 225)}...` : description;

	const View = () => {
		return (
			<>
				<Link
					to={`/films/${id}`}
					className="info__link">
					<img
						src={image}
						alt={title}
						className="info__img"
					/>
				</Link>
				<div className="info__main">
					<h3 className="info__title">
						<span className="info__title-text info__title-text_eng">{title}</span>
						<span className="info__title-text info__title-text_jp">{originalTitle}</span>
					</h3>
					<p className="info__descr">{shortDescription}</p>
				</div>
			</>
		);
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !loading && !error ? <View /> : null;

	return (
		<div className="random section">
			<h2 className="sr-only">Random film</h2>
			<div className="random__container container">
				<article className="info">
					{errorMessage}
					{spinner}
					{content}
				</article>
				<div className="random__try">
					<span className="random__try-text">Random anime for today!</span>
					<span className="random__try-text">Have you seen them all?</span>
					<span className="random__try-text random__try-text_choose">Or choose another one</span>
					<button
						className="random__try-btn"
						onClick={updateFilm}>
						Try it!
					</button>
				</div>
			</div>
		</div>
	);
};

export default RandomFilm;
