import { Component, OnInit } from '@angular/core';
import { ReuseTabService } from '@delon/abc';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

    listOfOption = [];
    size = 'default';
    singleValue = 'a10';
    multipleValue = ['a10', 'c12'];
    tagValue = ['a10', 'c12', 'tag'];
    selectedOS;
    selectOpen = false;

    ngOnInit(): void {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }

    openChange = () => {
        console.log(this.selectOpen);
    }

    constructor(private reuseTabService: ReuseTabService) { }

    /* _onReuseDestroy() {
        console.log('_onReuseDestroy');
        this.reuseTabService.clear()
        console.log(this.selectOpen);
    } */
}
