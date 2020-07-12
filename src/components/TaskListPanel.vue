<template>
    <!-- TODO ブラウザ可変対応 -->
    <v-container class="mainContent" wrap>
        <v-card
            flat 
            class="taskGroups"
            color="grey lighten-3"
            v-for="group in taskGroups" :key="group.id"            
        >
            <v-card-title class="justify-center">
                <span>{{ group.title }}</span>
            </v-card-title>
            <v-icon 
                large
                class="mx-auto" style="width: 100%;"
                color="green"
                @click="setShowTaskModal(true)"
            >
                fa fa-plus-circle
            </v-icon>
            <v-card v-for="task in group.tasks" :key="task.id" class="taskCard" @click="setShowTaskModal(true)">
                <span>{{ task.name }}</span>
            </v-card>
        </v-card>
        <taskModal />
    </v-container>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import TaskModal from '~/components/TaskModal.vue'
    export default {
        components: {
            TaskModal
        },
        data: () => ({
            // TODO  DBから取得
            taskGroups: [
                { 
                  id: 1,
                  title: 'TODO',
                  tasks: 
                    [ 
                        { id: 1, name: 'test1' },
                        { id: 2, name: 'test2' },
                        { id: 3, name: 'test3' },
                        { id: 4, name: 'test4' }
                    ]
                },
                {
                    id: 2,
                    title: 'ONGOING',
                    tasks: 
                    [
                        { id: 5, name: 'test5' },
                        { id: 6, name: 'test6' }
                    ]
                },
                { 
                    id: 3,
                    title: 'DONE',
                    tasks: 
                    [ 
                        { id: 7, name: 'test7' },
                        { id: 8, name: 'test8' },
                        { id: 9, name: 'test9' },
                        { id: 10, name: 'test10' },
                        { id: 11, name: 'test11' },
                    ]
                }
            ],
        }),
        computed: {
            ...mapGetters({
                getShowTaskModal: 'task/getShowTaskModal'
            })
        },
        methods: {
            ...mapMutations({
                setShowTaskModal: 'task/showTaskModal'
            })
        }
    }
</script>

<style>
    .mainContent {
        /** TODO 高さ可変対応 */
        height: 440px;
    }
    .taskGroups {
        width: 31%;
        height: 100%;
        border: 1px white;
        border-color: white;
        margin: 0 10px;
        float: left;
    }
        .taskCard {
            margin: 10px;
            padding: 5px 10px; 
        }
</style>