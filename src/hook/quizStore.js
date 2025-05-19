import { create } from "zustand";

export const useQuizStore = create((set) => ({
  theta: 3,
  setTheta: (theta) => set({ theta }),

  summary: [],
  addSummary: (item) =>
    set((state) => ({
      summary: [...state.summary, item],
    })),

  correct_streak: 0,
  setCorrectStreak: (val) => set({ correct_streak: val }),

  wrong_streak: 0,
  setWrongStreak: (val) => set({ wrong_streak: val }),

  total_correct: 0,
  setTotalCorrect: (val) => set({ total_correct: val }),

  resetQuiz: () =>
    set({
      theta: 0,
      summary: [],
      correct_streak: 0,
      wrong_streak: 0,
      total_correct: 0,
    }),
}));
