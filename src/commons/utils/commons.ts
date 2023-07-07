import dayjs from '@/plugins/dayjs'
import { strChineseFirstPY } from './chineseFirstPY'
import { nanoid } from 'nanoid'

/**
 * 判断一个对象 || 数组 || 字符串(包括空格) 是否为空
 * @example null、undefined、'undefined'、[]、''、' '
 * @param value
 * @return {boolean}
 */
export function isEmpty(value) {
	if (value === null || value === undefined || value === 'undefined' || value === false) {
		return true
	} else if (Array.isArray(value)) {
		return value.length === 0
	} else if (typeof value === 'string') {
		return value.trim().length === 0
	} else {
		return false
	}
}

/**
 * 将一个数字前面补充0
 * @param value
 * @param length
 */
export function addZero(value: number, length: number): string {
	const valueLength = value.toString().length
	let zero = ''
	for (let i = 0; i < length - valueLength; i++) {
		zero += '0'
	}
	return zero + value
}

/**
 * 解析日期
 * @param date
 * @param format
 * @returns {string}
 */
export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
	if (isEmpty(date)) {
		return undefined
	} else {
		return dayjs(date).format(format)
	}
}

/**
 * 精简日期
 * @param date
 * @example
 *  以 2020-01-31 23:59:59 为基准:
 *  时分:   2020-01-31 09:06:52 -> 09:06
 *  昨天:   2020-01-30 09:06:52 -> 昨天
 *  月天:   2020-01-23 09:06:52 -> 1月23日
 *  年月日: 2019-01-31 09:06:52 -> 2019年1月31日
 */
export function simpleDateTime(date) {
	if (date == null) {
		return undefined
	}
	const now = dayjs()
	const targetDate = dayjs(date)

	if (now.year() !== targetDate.year()) {
		return targetDate.year() + '年' + (targetDate.month() + 1) + '月' + targetDate.date() + '日'
	} else if (now.month() !== targetDate.month() || (targetDate.date() + 1 !== now.date() && now.date() !== targetDate.date())) {
		return targetDate.month() + 1 + '月' + targetDate.date() + '日'
	} else if (now.date() === targetDate.date()) {
		return addZero(targetDate.hour(), 2) + ':' + addZero(targetDate.minute(), 2)
	} else {
		return '昨天'
	}
}

// 验证手机号
export function verifyPhone(phoneNumber) {
	const reg = new RegExp(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/)
	return reg.test(phoneNumber)
}

// 获取文件前缀
export function getFileSuffix(fileName) {
	let fileSuffix = ''
	if (fileName == null || fileName === '') return fileSuffix
	const files = fileName.split('.')
	if (files.length > 1) fileSuffix = files[files.length - 1]
	return fileSuffix
}

// 格式化文件大小
export function renderSize(filesize) {
	if (filesize == null || filesize == '') {
		return '0B'
	}
	const unitArr = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
	let index
	const srcsize = parseFloat(filesize)
	index = Math.floor(Math.log(srcsize) / Math.log(1024))
	let size: any = srcsize / Math.pow(1024, index)
	size = size.toFixed(2) // 保留的小数位数
	return size + unitArr[index]
}

// 获取中文字符串拼音首字母
export function getChineseHeadLetter(str, toUpper = false) {
	if (typeof str !== 'string') return
	let ch = str.charAt(0)
	let s = checkCh(ch)
	if (toUpper) return s.toUpperCase()
	else return s.toLowerCase()
}

export function checkCh(ch) {
	let uni = ch.charCodeAt(0)
	if (uni > 40869 || uni < 19968) return ch
	return strChineseFirstPY.charAt(uni - 19968)
}

// 生成26个英文字母数组
export function generateLetterArray(toUpper = false) {
	let code = toUpper ? 65 : 97
	return new Array(26).fill(null).map((v, i) => String.fromCharCode(code + i))
}

// 生成随机dom元素id
export function getDomId() {
	return nanoid().replace('-', '').replace(/[0-9]/g, '') // nanoid生成的随机字符需要做一下处理，否则生成的id可能不符合uniapp规范（会报错）
}
