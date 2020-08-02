import 'Organization/web/style.scss';
import CellModal from 'Grid/Block/Cell/Modal';
import CellNumeric from 'Grid/Block/Cell/Numeric';
import CellTree from 'Grid/Block/Cell/Tree';
import CommonGridPageGrid from 'Grid/Page/Grid';
class CoreOrganizationPageAdminOrganization extends CommonGridPageGrid {
	url = 'http://localhost:1337/organizations';
	title = 'Tổ chức';
	getHeaders() {
		return [
			{
				name: 'ID',
				column: 'id',
				sortable: true,
				CellComponent: CellNumeric
			},
			{
				name: 'Tên tổ chức',
				column: 'name',
				sortable: true,
				CellComponent: CellTree
			},
			{
				name: 'Email',
				column: 'email',
				sortable: true,
			},
			{
				name: 'Phone',
				column: 'phone',
				sortable: true,
			},
			{
				name: 'Thành viên',
				column: 'members',
				sortable: true,
				CellComponent: CellModal,
				action: function (row) {
					alert(row.id);
				}
			},
		];
	}

	getFilters() {
		return [{
			title: 'Phạm vi',
			options: [
				{
					value: 1,
					label: 'Tổng công ty'
				},
				{
					value: 2,
					label: 'Chi nhánh A'
				},
			]
		},
		{
			title: 'Tỉnh thành',
			options: [
				{
					value: 1,
					label: 'Hà Nội'
				},
				{
					value: 2,
					label: 'Hồ Chí Minh'
				},
			]
		}];
	}

}

export default CoreOrganizationPageAdminOrganization;
