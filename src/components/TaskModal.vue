<template>
    <v-overlay v-if="showTaskModal" :z-index=1>
        <v-card height="600" width="400" class="px-5">
            <v-card-title class="justify-center">
                新規タスク
            </v-card-title>
             <v-text-field
                v-model="taskName"
                filled
                counter="20"
                label="タスク名"
                style="min-height: 96px"
            ></v-text-field>
            <datePicker textLabel="開始日" @updateDate="startDate = $event" />
            <datePicker textLabel="終了日" @updateDate="endDate = $event" />
            <!--v-select class="px-2"
                solo
                type="time"
            ></v-select-->
            <v-textarea
                v-model="remarks"
                filled
                label="備考"
            ></v-textarea>
            <div class="text-center">
                <v-btn @click="setShowTaskModal(false)">登録</v-btn>
                <v-btn @click="setShowTaskModal(false)">キャンセル</v-btn>
            </div>
        </v-card>
    </v-overlay>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import DatePicker from '~/components/DatePicker.vue'
    export default {
        components: {
            DatePicker
        },
        data: () => ({
            taskName: '',
            startDate: '',
            endDate: '',
            remarks: ''
        }),
        computed: {
            ...mapGetters({
                showTaskModal: 'task/getShowTaskModal'
            }),
        },
        methods: {
            ...mapMutations({
                setShowTaskModal: 'task/showTaskModal'
            }),
        }
    }
</script>

<style>

</style>