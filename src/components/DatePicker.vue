<template>
    <v-menu
        v-model="showDatePicker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
    >
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="targetDate"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
            v-model="date"
            @input="showDatePicker = false"
            no-title locale="ja"
            :first-day-of-week="1"
            :day-format="date => new Date(date).getDate()"
        >
        </v-date-picker>
    </v-menu>
</template>

<script>
export default {
    props: {
        textLabel: String,
    },
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        showDatePicker: false
    }),
    watch: {
        showDatePicker (val) {
            this.dateFormatted = this.formatDate(this.date)
        },
        targetDate (newVal) {
            this.$emit('updateDate', newVal)
        }
    },
    computed: {
        targetDate () {
            return this.formatDate(this.date)
        }
    },
    methods: {
        formatDate (date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${year}/${month}/${day}`
        }
    }
}
</script>