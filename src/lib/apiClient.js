import axios from "axios";
import {HOST} from "@/Utils/constant"

export const apiClient =axios.create({
    baseURL:HOST,
});

