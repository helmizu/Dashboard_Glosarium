import { PROFILE_SHOW, NAVBAR_SELECTED, BTN_BURGER_SHOW, MODAL_SHOW } from "../config/types";

export const profileShow = (con) => ({
  type: PROFILE_SHOW,
  payload: con
})

export const navbarSelect = (con) => ({
  type: NAVBAR_SELECTED,
  payload: con
})

export const btnBurgerShow = (con) => ({
  type: BTN_BURGER_SHOW,
  payload: con
})

export const modalShow = (con) => ({
  type: MODAL_SHOW,
  payload: con
})



