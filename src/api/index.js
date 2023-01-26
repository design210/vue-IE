import axios from 'axios';
const baseUrl = 'https://dapi.kakao.com';
const key = '2747cc77d6c23300d9fb150e23b1b9df';
function kakaoBookSearchApi(params) {
	return axios
		.get(`${baseUrl}/v3/search/book`, {
			headers: {
				Authorization: `KakaoAK ${key}`,
			},
			params,
		})
		.then(res => res);
}
export { kakaoBookSearchApi };
