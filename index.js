var $scope = new Vue({
    el: '#rewardApp',
    data: function() {
        return {
            searchValue: '',
            dialogVisible: false,
            vipVisible: false,
            shareList: [],
            total: 0,
            shareCurrentPage: 0
        }
    },
    methods: {
        vipDialog() {
            $scope.dialogVisible=true;
            $scope.vipVisible=true;
        },
        tabClick(){}
        ,getShareList(){}
        ,handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        }
    }
})