
//! QUẢN LÝ TUYỂN SINH 

function qlTuyenSinh() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var khuVuc = Number(document.getElementById("khuVuc").value);
    var doiTuong = Number(document.getElementById("doiTuong").value);
    var diemMon1 = Number( document.getElementById("diemMon1").value);
    var diemMon2 = Number(document.getElementById("diemMon2").value);
    var diemMon3 = Number(document.getElementById("diemMon3").value);


    var diemTong = khuVuc + doiTuong + diemMon1 + diemMon2 + diemMon3;

    var loai = "";
    if (diemTong >= diemChuan) {
        loai = "Đậu";
    } else{
        loai = 'Rớt'
    }

    var diem = '';
    if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        diem = ' - Tổng điểm: ' + diemTong;
    } else {
        diem = '. Do có điểm nhỏ hơn hoặc bằng 0';
        loai = 'Rớt'
    }

    document.getElementById("ketQua").innerHTML ="Bạn đã " + loai + diem;
}

document.getElementById("btnTinhKQ").onclick = qlTuyenSinh;




//! TÍNH TIỀN ĐIỆN

const SO_DIEN_50KW_DAU = 500;
const SO_DIEN_50KW_KE = 650;
const SO_DIEN_100KW_KE = 850;
const SO_DIEN_150KW_KE = 1100;
const SO_DIEN_CON_LAI = 1300;



function tinhTienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var soKW = Number(document.getElementById("soKW").value);

    var tinhTienDien = 0;
    if(soKW <= 0){
        alert ("Số kw không hợp lệ! Vui lòng nhập lại...")
    }else if (soKW > 0 && soKW <= 50){
        tinhTienDien = soKW * SO_DIEN_50KW_DAU;
    }else if(soKW > 50 && soKW <= 100){
        tinhTienDien = (50 * SO_DIEN_50KW_DAU) + (soKW - 50)*SO_DIEN_50KW_KE;
    }else if(soKW > 100 && soKW <= 200){
        tinhTienDien = (50 * SO_DIEN_50KW_DAU) + (50 * SO_DIEN_50KW_KE) + (soKW - 100)*SO_DIEN_100KW_KE;
    }else if(soKW > 200 && soKW <= 350){
        tinhTienDien = (50 * SO_DIEN_50KW_DAU) + (50 * SO_DIEN_50KW_KE) + (100 * SO_DIEN_100KW_KE) + (soKW - 200) * SO_DIEN_150KW_KE;
    }else{
         tinhTienDien = (50 * SO_DIEN_50KW_DAU) + (50 * SO_DIEN_50KW_KE) + (100 * SO_DIEN_100KW_KE) + ( 150 * SO_DIEN_150KW_KE) + (soKW - 350) * SO_DIEN_CON_LAI;
    }

document.getElementById("ketQuaTĐ").innerHTML = "Họ Tên:  " + hoTen + "; Tiền Điện: " + tinhTienDien.toLocaleString() + " vnđ";

   
}

document.getElementById("btntinhTĐ").onclick = tinhTienDien;


//!💰 TÍNH THUẾ THU NHẬP CÁ NHÂN

function tinhThueThuNhap() {

    var nhapHoTen = document.getElementById("nhapHoTen").value;
    var tongThuNhap = Number(document.getElementById("tongThuNhap").value);
    var soNguoiPhuThuoc = Number( document.getElementById("soNguoiPhuThuoc").value);
    
   
    var thuNhapChiuThue = "0";
    var thuNhapChiuThue = (tongThuNhap - 4e+6 - soNguoiPhuThuoc * 1600e+3);
    
    var thuNhapCaNhan = "0" ;
    if(thuNhapChiuThue < 0){
        alert("Số tiền thu nhập không hợp lệ...")
    }else if(thuNhapChiuThue > 0 && thuNhapChiuThue <= 60e+6 ){
            thuNhapCaNhan = thuNhapChiuThue * 0.05;
     }else if(thuNhapChiuThue > 60e+6 && thuNhapChiuThue <= 120e+6 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.1;
     }else if(thuNhapChiuThue > 120e+6 && thuNhapChiuThue <= 210e+6 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.15;
     }else if(thuNhapChiuThue > 210e+6  && thuNhapChiuThue <= 384e+6 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.2;
     }else if(thuNhapChiuThue > 384e+6  && thuNhapChiuThue <= 624e+6 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.25;
     }else if(thuNhapChiuThue > 624e+6  && thuNhapChiuThue <= 960e+6 ){
        thuNhapCaNhan = thuNhapChiuThue * 0.3;
     }else{
        thuNhapCaNhan = thuNhapChiuThue * 0.35;
     }
    
    document.getElementById("ketQuaTT").innerHTML = "Họ Tên:  " + nhapHoTen + "; Tiền thuế thu nhập cá nhân: " + thuNhapCaNhan.toLocaleString() + " vnđ";
    
}

document.getElementById("btntinhTT").onclick = tinhThueThuNhap;


//! 🕸️ TÍNH TIỀN CAP 

document.getElementById('loaiKhachHang').onclick = function () {
    if (loaiKhachHang.value == 'doanh') {
        document.getElementById('divSoKetNoi').style.display = 'block';
    } else {
        document.getElementById('divSoKetNoi').style.display = 'none';
    }
}

function tinhtienCap() {
    var loaiKhachHang = document.getElementById('loaiKhachHang');
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh = Number(document.getElementById("soKenh").value);
    var soKetNoi = Number(document.getElementById("soKetNoi").value);

    var khachHang = '';
    if (loaiKhachHang.value == 'dan') {
        khachHang = 'Nhà dân';
    }else if (loaiKhachHang.value == 'doanh') {
        khachHang = 'Doanh nghiệp';
    }else {
        alert('VUI LÒNG CHỌN LOẠI KHÁCH HÀNG');
    }
    console.log(loaiKhachHang)

    const PHI_XU_LY_HOA_DON_NHA_DAN = 4.5;
    const PHI_DICH_VU_NHA_DAN = 20.5;
    const THUE_KENH_CAO_CAP_NHA_DAN = 7.5;

    const PHI_XU_LY_HOA_DON_DOANH_NGHIEP = 15;
    const PHI_DICH_VU_DOANH_NGHIEP = 75;
    const THUE_KENH_CAO_CAP_DOANH_NGHIEP = 50;

    var tongTienCap = 0;
    switch (khachHang) {
        case 'Nhà dân':
            tongTienCap =  PHI_XU_LY_HOA_DON_NHA_DAN + PHI_DICH_VU_NHA_DAN + (soKenh * THUE_KENH_CAO_CAP_NHA_DAN);
            break;
        case 'Doanh nghiệp':
            if (soKetNoi <= 10) {
                tongTienCap = PHI_XU_LY_HOA_DON_DOANH_NGHIEP + PHI_DICH_VU_DOANH_NGHIEP + (soKenh * THUE_KENH_CAO_CAP_DOANH_NGHIEP);
            } else {
                tongTienCap = PHI_XU_LY_HOA_DON_DOANH_NGHIEP + (soKetNoi - 10) * 5 + PHI_DICH_VU_DOANH_NGHIEP + (soKenh * THUE_KENH_CAO_CAP_DOANH_NGHIEP);
            }
            break;
        default:
            break;
    }
    document.getElementById('ketQuaTC').innerHTML = 'Mã khách hàng: ' + maKhachHang + ';' + ' Tiền cáp: $' + tongTienCap.toLocaleString() + ' VNĐ ';


}

document.getElementById("btntinhTC").onclick = tinhtienCap;
