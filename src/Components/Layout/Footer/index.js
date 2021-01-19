import React from 'react'
import './Footer.css'
export default function index() {
    return (
        <footer className="w-100 mt-5">
            <div className="footer-content">
                <h3>TQ Hung</h3>
                <p>Đồ án môn Công nghệ phần mềm, Giáo viên hướng dẫn: Trịnh Công Nhựt </p>
                <p>người thực hiện: Trần Quốc Hùng</p>
                <ul className="socials">
                    <li><a href="https://facebook.com/tranquochung6810"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://facebook.com/tranquochung6810"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="https://facebook.com/tranquochung6810"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="https://facebook.com/tranquochung6810"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>design by <span>Trần Quốc Hùng</span></p>
            </div>
        </footer>
    )
}
