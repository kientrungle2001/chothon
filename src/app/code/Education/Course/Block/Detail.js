import React, { useEffect } from 'react';
import { Row, Col } from 'Bootstrap/Block/Bootstrap';
import '../web/course.scss';
import detail_js from '../web/detail';
export default function EducationCourseBlockDetail({ courseId }) {
	useEffect(function () {
		detail_js();
	});
	return (
		<>
			<div className="heading-section">
				<h2>Product Details</h2>
			</div>
			<Row>
				<Col md={6}>
					<div id="slider" className="owl-carousel product-slider">
						<div className="item">
							<img alt="img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
						</div>
						<div className="item">
							<img alt="img" src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
						</div>
						<div className="item">
							<img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
						</div>
						<div className="item">
							<img alt="img" src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
						</div>
						<div className="item">
							<img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
						</div>
						<div className="item">
							<img alt="img" src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
						</div>
						<div className="item">
							<img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
						</div>
					</div>
					<div id="thumb" className="owl-carousel product-thumb">
						<div className="item">
							<img alt="img" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
						</div>
						<div className="item">
							<img alt="img" src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
						</div>
						<div className="item">
							<img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
						</div>
						<div className="item">
							<img alt="img" src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
						</div>
						<div className="item">
							<img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
						</div>
						<div className="item">
							<img alt="img" src="https://i.ytimg.com/vi/PJ_zomNMK_s/maxresdefault.jpg" />
						</div>
						<div className="item">
							<img alt="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI6nUmObt62eDkqNSmIvCN_KkQExtbpJmUbVx_eTh_Y3v3r-Jw" />
						</div>
					</div>
				</Col>
				<Col md={6}>
					<div className="product-dtl">
						<div className="product-info">
							<div className="product-name">Variable Product</div>
							<div className="reviews-counter">
								<div className="rate">
									<input type="radio" id="star5" name="rate" value="5" />
									<label htmlFor="star5" title="text">5 stars</label>
									<input type="radio" id="star4" name="rate" value="4" />
									<label htmlFor="star4" title="text">4 stars</label>
									<input type="radio" id="star3" name="rate" value="3" />
									<label htmlFor="star3" title="text">3 stars</label>
									<input type="radio" id="star2" name="rate" value="2" />
									<label htmlFor="star2" title="text">2 stars</label>
									<input type="radio" id="star1" name="rate" value="1" />
									<label htmlFor="star1" title="text">1 star</label>
								</div>
								<span>3 Reviews</span>
							</div>
							<div className="product-price-discount"><span>$39.00</span><span className="line-through">$29.00</span></div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						<div className="row">
							<div className="col-md-6">
								<label htmlFor="size">Size</label>
								<select id="size" name="size" className="form-control">
									<option>S</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</select>
							</div>
							<div className="col-md-6">
								<label htmlFor="color">Color</label>
								<select id="color" name="color" className="form-control">
									<option>Blue</option>
									<option>Green</option>
									<option>Red</option>
								</select>
							</div>
						</div>
						<div className="product-count">
							<label htmlFor="size">Quantity</label>
							<form action="#" className="display-flex">
								<div className="qtyminus">-</div>
								<input type="text" name="quantity" defaultValue="1" className="qty" />
								<div className="qtyplus">+</div>
							</form>
							<a href="#" className="round-black-btn">Add to Cart</a>
						</div>
					</div>
				</Col>
			</Row>
			<div className="product-info-tabs">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item">
						<a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
				  	</div>
					<div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
						<div className="review-heading">REVIEWS</div>
						<p className="mb-20">There are no reviews yet.</p>
						<form className="review-form">
							<div className="form-group">
								<label>Your rating</label>
								<div className="reviews-counter">
									<div className="rate">
										<input type="radio" id="star5" name="rate" value="5" />
										<label htmlFor="star5" title="text">5 stars</label>
										<input type="radio" id="star4" name="rate" value="4" />
										<label htmlFor="star4" title="text">4 stars</label>
										<input type="radio" id="star3" name="rate" value="3" />
										<label htmlFor="star3" title="text">3 stars</label>
										<input type="radio" id="star2" name="rate" value="2" />
										<label htmlFor="star2" title="text">2 stars</label>
										<input type="radio" id="star1" name="rate" value="1" />
										<label htmlFor="star1" title="text">1 star</label>
									</div>
								</div>
							</div>
							<div className="form-group">
								<label>Your message</label>
								<textarea className="form-control" rows="10"></textarea>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" name="" className="form-control" placeholder="Name*" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<input type="text" name="" className="form-control" placeholder="Email Id*" />
									</div>
								</div>
							</div>
							<button className="round-black-btn">Submit Review</button>
						</form>
					</div>
				</div>
			</div>

			<div>Get free icon packs for your next project at <a href="http://iiicons.in/" target="_blank">www.iiicons.in</a></div>
		</>
	)
}