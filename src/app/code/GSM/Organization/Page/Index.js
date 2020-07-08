import React from 'react';
import '../web/style.scss';

class GSMOrganizationPageIndex extends React.Component {
	getItems() {
		return [
			{
				id: 1,
				name: 'Tổng công ty',
				parent: '',
				type: 'Organization',
				level: 1
			},
			{
				id: 2,
				name: 'Chi nhánh 1',
				parent: 'Tổng công ty',
				type: 'Branch',
				level: 2
			},
			{
				id: 3,
				name: 'Chi nhánh 2',
				parent: 'Tổng công ty',
				type: 'Branch',
				level: 2
			}
		];
	}
	render() {
		return (
			<>
				<div className="modal" tabindex="-1" role="dialog">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Modal title</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<p>Modal body text goes here.</p>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary">Save changes</button>
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
				<div className="admin_page pt-3 pb-3">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-3">
								<div className="card">
									<div className="card-header">
										Tìm kiếm
  								</div>
									<div className="card-body">
										<form>
											<div className="form-group">
												<input className="form-control" placeholder="Tên tổ chức" />
											</div>
											<div className="form-group">
												<select className="form-control" placeholder="Phạm vi">
													<option>Phạm vi</option>
												</select>
											</div>
										</form>
									</div>
								</div>

							</div>
							<div className="col-md-9">
								<div className="card">
									<div className="card-header">
										Tổ chức
									</div>

									<div className="card-body">
										<div className="form-row align-items-center mb-3">
											<div className="col-auto">
												<select className="form-control">
													<option>Chọn hành động</option>
													<option>Gán nhân viên</option>
												</select>

											</div>
											<div className="col-auto">
												<button className="btn btn-primary">Áp dụng</button>
											</div>
											<div className="col-auto">
												<input className="form-control" placeholder="Tên tổ chức" />
											</div>
											<div className="col-auto">
												<button className="btn btn-primary">Tìm kiếm</button>
											</div>
										</div>
										<table className="table table-stripped table-bordered">
											<thead>
												<tr>
													<th>ID</th>
													<th>Tên tổ chức</th>
													<th>Phạm vi</th>
													<th>Thành viên</th>
												</tr>
											</thead>
											<tbody>
												{this.getItems().map(function (row, index) {
													return (
														<tr key={'row-' + index}>
															<td className="col-id">{row.id}</td>
															<td className="col-name">{'|' + '____'.repeat(row.level - 1)}{row.name}</td>
															<td className="col-parent">{row.parent}</td>
															<td><a href="#">Xem thành viên</a></td>
														</tr>
													);
												})}

											</tbody>
										</table>
										<nav ariaLabel="Page navigation example">
											<ul className="pagination">
												<li className="page-item"><a className="page-link" href="/">|&lt;</a></li>
												<li className="page-item"><a className="page-link" href="/">&lt;&lt;</a></li>
												<li className="page-item"><a className="page-link" href="/">1</a></li>
												<li className="page-item"><a className="page-link" href="/">2</a></li>
												<li className="page-item"><a className="page-link" href="/">3</a></li>
												<li className="page-item"><a className="page-link" href="/">&gt;&gt;</a></li>
												<li className="page-item"><a className="page-link" href="/">&gt;|</a></li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default GSMOrganizationPageIndex;