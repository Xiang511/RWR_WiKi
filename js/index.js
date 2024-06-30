let menuBtn = document.querySelectorAll(".icon");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (e) => {
        console.log(e.target);
        e.target.classList.toggle("active");
    });
}


document.querySelector('.vid').addEventListener('animationend', function () {
    this.style.display = 'none';
});



let table = new DataTable('#myTable', {
    // order: [[2, 'asc']],
    info: false,
    // paging: false
    processing: true,
    // 表格拖拉
    colReorder: true,
    colReorder: {
        fixedColumnsLeft: 1
    },
    fixedColumns: {
        start: 1,
        end: 2
    },
    scrollCollapse: true,
    scrollX: true,
    scrollY: 500,
    columnDefs: [
        { orderable: false, targets: 0 },
        { orderable: false, targets: 2 },
        { orderable: false, targets: 3 },
    ],
    "language": {
        "searchPlaceholder": "single keyword"
    }
});

if (window.innerWidth > 1500) {

    table.destroy();

    table = new DataTable('#myTable', {
        // order: [[2, 'asc']],
        info: false,
        // paging: false
        processing: true,
        // 表格拖拉
        colReorder: true,
        colReorder: {
            fixedColumnsLeft: 1
        },
        fixedColumns: {
            start: 1,
            end: 2
        },
        // scrollCollapse: true,
        // scrollX: true,
        // scrollY: 800,
        columnDefs: [
            { orderable: false, targets: 0 },
            { orderable: false, targets: 2 },
            { orderable: false, targets: 3 },
        ],
        "language": {
            "searchPlaceholder": "single keyword"
        }
    });
}

const searchitem1 = document.getElementById("searchitem1");
const searchitem2 = document.getElementById("searchitem2");

function multiSearch() {

    $(document).ready(function () {
        var table = $('#myTable').DataTable(); // 確保這裡的表格ID為'myTable'

        $.fn.dataTable.ext.search.push(
            function (settings, data, dataIndex) {
                var name = data[1].toLowerCase();

                if (name.includes(searchitem1.value.toLowerCase()) || name.includes(searchitem2.value.toLowerCase())) {
                    return true;
                }
                return false;
            }
        );

        table.draw();
    });

}

function clearSearch() {


    searchitem1.value = '';
    searchitem2.value = '';

    console.log(123);
    // 移除最後一個添加的自定義搜索函數
    $.fn.dataTable.ext.search.pop();

    // 重新繪製表格以應用更改
    $('#myTable').DataTable().draw();
}