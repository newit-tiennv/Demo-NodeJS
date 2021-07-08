
/**
 * Chỉ trả về 1 giá trị duy nhất.
 * Không thực thi hàm đối với phần tử mảng không có giá trị.
 * Không thay đổi mảng ban đầu.
 */
// Giỏ hàng
var gioHang = [{
    sanPham: "iPhone 12",
    soLuong: 1,
    giaBan: 999
},
{
    sanPham: "RAM",
    soLuong: 1,
    giaBan: 50
},
{
    sanPham: "AirPods",
    soLuong: 2,
    giaBan: 250
}
];

const tongTien = gioHang.reduce((tong, sp) => {
    return tong + sp.soLuong * sp.giaBan;
}, 0);

console.log(tongTien);


/**
 * Ex: Làm phẳng 1 mảng.
 */

lamPhangMang = (array) => {
    const giaTriKhoiTao = [];
    return array.reduce( (result, value) => {
        return result.concat(Array.isArray(value) ? lamPhangMang(value) : value);
    }, giaTriKhoiTao);
}

const ArrayTest = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];
const results = lamPhangMang(ArrayTest);
console.log(results);