let menuBtn = document.querySelectorAll(".icon");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (e) => {
        console.log(e.target);
        e.target.classList.toggle("active");
    });
}


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

let searchitem1 = document.getElementById("searchitem1");
let searchitem2 = document.getElementById("searchitem2");
let searchitem3 = document.getElementById("searchitem3");
let searchitem4 = document.getElementById("searchitem4");
let searchitem5 = document.getElementById("searchitem5");

var input_cout_total = "";
var input_cout_total_value = "";

function multiSearch() {

    $(document).ready(function () {
        var table = $('#myTable').DataTable(); // 確保這裡的表格ID為'myTable'

        $.fn.dataTable.ext.search.push(
            function (settings, data, dataIndex) {
                var name = data[1].toLowerCase();
                if (input_cout_total_value == 5) {
                    if (name.includes(searchitem1.value.toLowerCase()) || name.includes(searchitem2.value.toLowerCase()) || name.includes(searchitem3.value.toLowerCase()) || name.includes(searchitem4.value.toLowerCase()) || name.includes(searchitem5.value.toLowerCase())) {
                        return true;
                    }
                    return false;
                } else if (input_cout_total_value == 4) {
                    if (name.includes(searchitem1.value.toLowerCase()) || name.includes(searchitem2.value.toLowerCase()) || name.includes(searchitem3.value.toLowerCase()) || name.includes(searchitem4.value.toLowerCase())) {
                        return true;
                    }
                    return false;
                }
                else if (input_cout_total_value == 3) {
                    if (name.includes(searchitem1.value.toLowerCase()) || name.includes(searchitem2.value.toLowerCase()) || name.includes(searchitem3.value.toLowerCase())) {
                        return true;
                    }
                    return false;
                }
                else {
                    if (name.includes(searchitem1.value.toLowerCase()) || name.includes(searchitem2.value.toLowerCase())) {
                        return true;
                    }
                    return false;
                }
            }
        );

        table.draw();
    });

}

function clearSearch() {


    searchitem1.value = '';
    searchitem2.value = '';

    if(input_cout_total_value == 3){
        searchitem3.value = '';
        searchitem3.remove();
    }
    if(input_cout_total_value == 4){
        searchitem3.value = '';
        searchitem4.value = '';
        searchitem3.remove();
        searchitem4.remove();
    }
    if(input_cout_total_value == 5){
        searchitem3.value = '';
        searchitem4.value = '';
        searchitem5.value = '';
        searchitem3.remove();
        searchitem4.remove();
        searchitem5.remove();
    }


    document.getElementById('addInputButton').disabled = false;
    
    input_cout_total_value = 2;


    // 移除最後一個添加的自定義搜索函數
    $.fn.dataTable.ext.search.pop();

    // 重新繪製表格以應用更改
    $('#myTable').DataTable().draw();
}


document.getElementById('addInputButton').addEventListener('click', function () {
    // 獲取容器
    var container = document.getElementById('add-searchbar');
    var input_cout_total = document.getElementById('multi-search');

    // 計算已經存在的搜索框數量
    var existingInputs = input_cout_total.getElementsByClassName('searchbar').length;
    // 創建新的 input 元素
    var newInput = document.createElement('input');
    // 設置 class
    newInput.className = 'searchbar';
    // 設置 id，基於現有的搜索框數量


    var input_cout = existingInputs + 1

    input_cout_total.value = input_cout;

    input_cout_total_value = input_cout_total.value;

    console.log(input_cout_total_value);

    newInput.id = 'searchitem' + input_cout;

    newInput.value = '';

    container.appendChild(newInput);

    if (input_cout == 5) {
        document.getElementById('addInputButton').disabled = true;
    }

    if(input_cout == 3){
        searchitem3 = document.getElementById("searchitem3");
    }
    if(input_cout == 4){
        searchitem4 = document.getElementById("searchitem4");
    }
    if(input_cout == 5){
        searchitem5 = document.getElementById("searchitem5");
    }


});