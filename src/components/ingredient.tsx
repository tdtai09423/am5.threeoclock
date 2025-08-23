"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

// Định nghĩa kiểu dữ liệu
interface IngredientType {
  id: string;
  name: string;
  color: string;
  emoji: string;
}

interface Card {
  id: number;
  ingredient: IngredientType;
  isFlipped: boolean;
  isMatched: boolean;
}

const Ingredient = () => {
  // Định nghĩa nguyên liệu và công thức
  const ingredients: IngredientType[] = [
    { id: "green_bean", name: "Đậu xanh", color: "#4CAF50", emoji: "🫘" },
    { id: "lotus_seed", name: "Hạt sen", color: "#E91E63", emoji: "🪷" },
    { id: "taro", name: "Khoai môn", color: "#9C27B0", emoji: "🥔" },
    { id: "egg", name: "Trứng gà", color: "#FF9800", emoji: "🥚" },
    { id: "sugar", name: "Đường", color: "#FFC107", emoji: "🍯" },
    { id: "flour", name: "Bột", color: "#795548", emoji: "🌾" },
  ];

  // Công thức bánh
  const recipes = {
    taro: ["taro", "egg", "sugar", "flour"],
    lotus: ["lotus_seed", "egg", "sugar", "flour"],
  };

  // State của game
  const [cards, setCards] = useState<Card[]>([]);
  const [collectedIngredients, setCollectedIngredients] = useState<string[]>(
    []
  );
  const [completedCakes, setCompletedCakes] = useState<string[]>([]);
  const [gameState, setGameState] = useState("playing"); // 'playing', 'won'
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHiding, setIsHiding] = useState(false);

  // Khởi tạo game
  useEffect(() => {
    initializeGame();
  }, []);

  // Kiểm tra công thức hoàn thành
  useEffect(() => {
    checkRecipes();
  }, [collectedIngredients]);

  const initializeGame = () => {
    // Tạo 12 thẻ (2 bộ) để có cặp để lật
    const duplicatedIngredients = [...ingredients, ...ingredients];
    const shuffledIngredients = duplicatedIngredients.sort(
      () => Math.random() - 0.5
    );

    const gameCards = shuffledIngredients.map((ingredient, index) => ({
      id: index,
      ingredient,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(gameCards);
    setCollectedIngredients([]);
    setCompletedCakes([]);
    setGameState("playing");
  };

  const checkRecipes = () => {
    const ingredientCounts = collectedIngredients.reduce((acc, ing) => {
      acc[ing] = (acc[ing] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const newCompletedCakes: string[] = [];

    // Kiểm tra bánh khoai môn
    if (
      recipes.taro.every((ingredient) => ingredientCounts[ingredient] >= 1) &&
      !completedCakes.includes("taro")
    ) {
      newCompletedCakes.push("taro");
    }

    // Kiểm tra bánh hạt sen
    if (
      recipes.lotus.every((ingredient) => ingredientCounts[ingredient] >= 1) &&
      !completedCakes.includes("lotus")
    ) {
      newCompletedCakes.push("lotus");
    }

    if (newCompletedCakes.length > 0) {
      setCompletedCakes((prev) => [...prev, ...newCompletedCakes]);
    }

    // Kiểm tra thắng game (hoàn thành cả 2 loại bánh)
    if (completedCakes.length + newCompletedCakes.length === 2) {
      setTimeout(() => {
        setGameState("won");
      }, 1000);
    }
  };

  const handleCardClick = () => {
    if (isFlipped) {
      // Nếu thẻ đang lật, thực hiện animation ẩn
      setIsHiding(false);
      setTimeout(() => {
        setIsFlipped(false);
        setIsHiding(false);
      }, 550); // Thời gian khớp với animation
    } else {
      // Nếu thẻ chưa lật, thực hiện lật thẻ
      setIsFlipped(true);
    }
  };

  return (
    <div className="min-h-screen bg-none md:p-10 md:pb-15">
      <div className="max-w-[80%] mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-8">
          <h1 className="text-md md:text-4xl text-black font-futura-bold mb-4">
            Lật thẻ để thu thập nguyên liệu
          </h1>
          <h1 className="text-md md:text-4xl text-black font-futura-bold mb-4">
            và làm bánh trung thu!
          </h1>
          <div className="w-48 md:w-100 lg:w-300 h-0.5 bg-gray-600 mx-auto"></div>
        </div> */}

        {/* Game Board */}
        <div className="flex items-center justify-center p-8">
          <div className="relative">
            {/* Deck of cards background */}
            <div className="absolute transform flex items-center justify-center translate-x-4 translate-y-4">
              {/* Card 1 */}
              <div
                className="absolute w-32 h-44 md:w-100 md:h-100 rounded-lg shadow-lg"
                style={{
                  transform: "rotateZ(-2deg)",
                  top: "5rem",
                  backgroundImage: "url('/img/card/card-back.png')",
                  backgroundSize: "102.5% 101.5%",
                  backgroundPosition: "center",
                  backgroundColor: "#f8f5ed",
                }}
              />

              {/* Card 2 */}
              <div
                className="absolute w-32 h-44 md:w-100 md:h-100 rounded-lg shadow-lg"
                style={{
                  transform: "rotateZ(6deg)",
                  top: "5rem",
                  backgroundImage: "url('/img/card/card-back.png')",
                  backgroundSize: "102.5% 101.5%",
                  backgroundPosition: "center",
                  backgroundColor: "#f8f5ed",
                }}
              />

              {/* Card 3 */}
              <div
                className="absolute w-32 h-44 md:w-100 md:h-100 rounded-lg shadow-lg"
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  transform: "rotateZ(-10deg)",
                  top: "5rem",
                  backgroundImage: "url('/img/card/card-back.png')",
                  backgroundSize: "102.5% 101.5%",
                  backgroundPosition: "center",
                  backgroundColor: "#f8f5ed",
                }}
              />
              <div
                className={`absolute w-32 h-44 md:w-100 md:h-100 rounded-lg flip-container ${
                  isFlipped ? "flip" : ""
                } ${isHiding ? "hide" : ""}`}
                onClick={() => setIsFlipped(!isFlipped)}
                style={{
                  perspective: "1000px",
                  top: "5rem",
                  zIndex: isFlipped ? 50 : 2,
                  transform: "rotateZ(1deg)",
                  backgroundImage: "url('/img/card/card-back.png')",
                  backgroundSize: "102.5% 101.5%",
                  backgroundPosition: "center",
                  backgroundColor: "#f8f5ed",
                }}
              >
                {/* Flipper container */}
                <div
                  className="flipper relative w-32 h-44 md:w-100 md:h-100 cursor-pointer"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "left center",
                    transition: "0.6s",
                    transform: isFlipped
                      ? "rotateY(180deg) translate(-50%, -35%)"
                      : "rotateY(0deg)",
                    zIndex: isHiding ? -1 : "auto",
                    animation: isHiding
                      ? "hideCard 0.55s linear forwards"
                      : "none",
                  }}
                >
                  {/* Front face (card back) */}
                  <div
                    className="front absolute inset-0 w-full h-full rounded-lg"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(0deg)",
                      backgroundImage: "url('/img/card/card-back.png')",
                      backgroundSize: "102.5% 101.5%",
                      backgroundPosition: "center",
                      backgroundColor: "#f8f5ed",
                      boxShadow: isFlipped
                        ? "none"
                        : "0px 3px 5px rgba(161, 146, 146, 0.5)",
                    }}
                  />

                  {/* Back face (card content) */}
                  <div
                    className={clsx(
                      "back absolute inset-0 w-full h-full rounded-lg p-2 shadow-xl md:p-4 overflow-hidden",
                      isFlipped
                        ? "top-[12rem] left-[-6rem] md:top-[10rem] md:left-[-12rem]"
                        : "top-0 left-0"
                    )}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: isFlipped
                        ? "rotateY(180deg) rotateZ(0deg) scale(1.5, 1.5)"
                        : "rotateY(180deg) rotateZ(0deg) scale(1, 1)",
                      transformOrigin: "center center",
                      backgroundImage: "url('/img/card/page_7_right-rm.png')",
                      backgroundSize: "102.5% 101.5%",
                      backgroundPosition: "center",
                      backgroundColor: "#f8f5ed",
                      fontSize: isFlipped ? "12px" : "10px",
                      transition: "all 0.6s ease",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Main flippable card */}
          </div>

          {/* CSS Styles */}
          <style jsx>{`
            @import url("https://fonts.googleapis.com/css?family=Ubuntu:400,300,500,700");

            .flip-container {
              perspective: 1000px;
              z-index: 2;
            }

            .flip-container.flip .flipper {
              transform: rotateY(180deg) translate(-50%, -35%) !important;
              z-index: 50;
            }

            .flip-container.hide .flipper {
              z-index: -1;
              animation: hideCard linear 0.55s;
              animation-iteration-count: 1;
            }

            .flip-container.flip .front {
              transform: scale(2, 2);
            }

            .flip-container.flip .back {
              transform: scale(1, 1);
            }

            .flipper {
              transition: 0.6s;
              transform-style: preserve-3d;
              position: relative;
              transform-origin: left center;
            }

            .front,
            .back {
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
              position: absolute;
            }

            .front {
              transform: rotateY(0deg);
            }

            .back {
              transform: rotateY(180deg);
            }

            @keyframes hideCard {
              0% {
                transform: translateX(0) rotateY(180deg);
                z-index: 1;
              }
              50% {
                transform: translateX(-200%) rotateY(0deg) rotateZ(15deg)
                  scale(0.7, 0.7);
                z-index: -10;
              }
              100% {
                transform: translateX(0) rotateY(0deg) scale(0.9, 0.9);
                z-index: -10;
              }
            }

            .flip-container.hide .card {
              z-index: -1;
            }
          `}</style>
        </div>

        {/* Modal thắng game */}
        {/* {gameState === "won" && (
          <div className="fixed inset-0 bg-none bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                🎉 Chúc Mừng!
              </h2>
              <p className="text-lg mb-6">
                Bạn đã hoàn thành cả hai công thức bánh trung thu!
              </p>
              <div className="space-y-2 mb-6">
                {completedCakes.map((cake) => (
                  <div key={cake} className="text-green-600 font-semibold">
                    {cake === "taro" && "🥔 Bánh Trung Thu Khoai Môn"}
                    {cake === "lotus" && "🪷 Bánh Trung Thu Hạt Sen"}
                  </div>
                ))}
              </div>
              <button
                onClick={resetGame}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg"
              >
                Chơi Lại
              </button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Ingredient;
