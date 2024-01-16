import axios from "axios";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '41701983-23ca5d5908e2c78927e8095f2';
const ITEMS_PER_PAGE = 40;

const getDaseUrl = () => {
  const url = new URL(BASE_URL);
  url.searchParams.append("key", API_KEY);
  url.searchParams.append("image_type", "photo");
  url.searchParams.append("orientation", "horizontal");
  url.searchParams.append("safesearch",true);

  return url;
};

const fetchImages = async (query, page = 1) => {
  try {
    const url = getDaseUrl();
    url.searchParams.append("q", query);
    url.searchParams.append("page", page);
    url.searchParams.append("per_rage", ITEMS_PER_PAGE);
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

