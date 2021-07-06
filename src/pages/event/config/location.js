const area = {
  北部: {
    臺北市: '',
    新北市: '',
    基隆市: '',
    桃園市: '',
    新竹市: '',
    新竹縣: '',
    宜蘭縣: '',
  },
  中部: {
    臺中市: '',
    苗栗縣: '',
    彰化縣: '',
    雲林縣: '',
    南投縣: '',
  },
  南部: {
    高雄市: '',
    臺南市: '',
    嘉義市: '',
    嘉義縣: '',
    屏東縣: '',
  },
  東部及離島: {
    花蓮縣: '',
    臺東縣: '',
    金門縣: '',
    澎湖縣: '',
    連江縣: '',
  },
}

export const parts = Object.getOwnPropertyNames(area)
export const cities = parts.map((v, i, array) =>
  Object.getOwnPropertyNames(area[array[i]])
)
