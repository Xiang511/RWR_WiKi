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
    columnDefs: [{ orderable: false, targets: 0 },
    ]
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
        columnDefs: [{ orderable: false, targets: 0 },
        ]
    });
}