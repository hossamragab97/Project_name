import { animate, state, style, transition, trigger } from "@angular/animations";

export const welcomeMove = trigger('fade' , [
  state('void',style(
{
    position: 'absolute',
    top: '-100px',
    color:'red',
    // fontSize:'20px',
    fontWeight:'bold',
    // fontFamily: '"Times New Roman", Times, serif'

})),
transition('void => *' , animate(1000)),
state('*',style(
  {
    position: 'absolute',
    top: '80px',
    color:'black',
    // fontSize:'80px',
    fontWeight:'bold',
    // fontFamily: '"Times New Roman", Times, serif'
  })),
])


export const buttonMove =
[trigger('fadebutton',
 [
  transition(':enter',
    [
    style({transform:'translateY(200px)'}),
    animate(1000 , style({transform:'translateX(0px)'}))
    ]
    ),
 ]),
]
