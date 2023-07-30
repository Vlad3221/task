import {Component, Vue, Prop} from 'vue-facing-decorator';


@Component({
    name: "createNewBlock"
})
export default class createNewBlock extends Vue {
    @Prop()
    public visible: boolean = false

    public get isVisible () {
        return this.visible
    }
}