"use client";
import { useState, useEffect, useCallback } from 'react';
import styles from './forca.module.css';
import Link from 'next/link';

const wordList = [
  'CASA', 'CARRO', 'ESCOLA', 'COMPUTADOR', 'FUTEBOL', 'FAMILIA',
  'TRABALHO', 'BRASIL', 'CIDADE', 'PRAIA', 'VIAGEM', 'MUSICA',
  'LIVRO', 'AMIGO', 'CACHORRO', 'GATO', 'COMIDA', 'FELICIDADE',
  'CHUVA', 'SOL', 'JARDIM', 'FLORESTA', 'MONTANHA', 'DINHEIRO',
  'PROFESSOR', 'MEDICO', 'TELEFONE', 'JANELA', 'PORTA', 'COZINHA'
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const JogoForcaDesenho = ({ numberOfGuesses }) => {
  const HEAD = <div key="head" className={styles.head} />;
  const BODY = <div key="body" className={styles.body} />;
  const RIGHT_ARM = <div key="right_arm" className={styles.rightArm} />;
  const LEFT_ARM = <div key="left_arm" className={styles.leftArm} />;
  const RIGHT_LEG = <div key="right_leg" className={styles.rightLeg} />;
  const LEFT_LEG = <div key="left_leg" className={styles.leftLeg} />;

  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

  return (
    <div className={styles.drawingContainer}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className={styles.scaffoldTop} />
      <div className={styles.scaffoldPole} />
      <div className={styles.scaffoldBase} />
    </div>
  );
};

export default function JogoForca() {
  const [wordToGuess, setWordToGuess] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  const maxErrors = 6;
  const isLoser = incorrectLetters.length >= maxErrors;
  const isWinner = wordToGuess && wordToGuess.split('').every(letter => guessedLetters.includes(letter));

  const startGame = useCallback(() => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setWordToGuess(randomWord);
    setGuessedLetters([]);
  }, []);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const handleGuess = useCallback((letter) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLoser]);
  
  useEffect(() => {
    const handler = (e) => {
      const key = e.key.toUpperCase();
      if (ALPHABET.includes(key)) {
        e.preventDefault();
        handleGuess(key);
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [handleGuess]);

  return (
    <div className={styles.container}>
      <h1>Jogo da Forca</h1>
      <Link href="/" className={styles.backButton}>
        &larr; Voltar ao Currículo
      </Link>
      <JogoForcaDesenho numberOfGuesses={incorrectLetters.length} />
      <div className={styles.wordDisplay}>
        {wordToGuess.split('').map((letter, index) => (
          <span key={index} className={styles.letter}>
            <span style={{
              visibility: guessedLetters.includes(letter) || isLoser ? 'visible' : 'hidden',
              color: !guessedLetters.includes(letter) && isLoser ? '#d94b4b' : 'inherit'
            }}>
              {letter}
            </span>
          </span>
        ))}
      </div>

      <div className={styles.keyboard}>
        {ALPHABET.map(letter => {
          const isGuessed = guessedLetters.includes(letter);
          const isIncorrect = isGuessed && !wordToGuess.includes(letter);
          return (
            <button
              key={letter}
              onClick={() => handleGuess(letter)}
              className={`${styles.key} ${isGuessed ? styles.guessed : ''} ${isIncorrect ? styles.incorrect : ''}`}
              disabled={isGuessed || isWinner || isLoser}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {(isWinner || isLoser) && (
        <div className={styles.gameOverModal}>
          <h2>{isWinner ? 'Você Venceu!' : 'Você Perdeu!'}</h2>
          {!isWinner && <p>A palavra era: <strong>{wordToGuess}</strong></p>}
          <button onClick={startGame}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}