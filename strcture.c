#include <stdio.h>
//1
/*
struct student{
    char name[100];
    int age;
    int tmar;
};
int main(){
    struct student a,b;
    scanf("%s",&a.name);
    scanf("%d",&a.age);
    scanf("%d",&a.tmar);
    printf("\n%s\n%d\n%d\n\n",a.name,a.age,a.tmar);
    scanf("%s",&b.name);
    scanf("%d",&b.age);
    scanf("%d",&b.tmar);
    printf("\n%s\n%d\n%d\n\n",b.name,b.age,b.tmar);
    int avg=(a.tmar+b.tmar)/2;
    printf("%f",avg);
}*/

//2
struct Date
{
    int year;
    int month;
    int day;   
};

int main(){
    struct Date a,b;
    scanf("%d %d %d",&a.year,&a.month,&a.day);
    scanf("%d %d %d",&b.year,&b.month,&b.day);
    int ans;
    if(a.year>b.year){
    ans= (a.year-b.year)*365  +  (b.month-a.month)*30 + (b.day-a.day);
    }
    else{
    ans= (b.year-a.year)*365  +  (b.month-a.month)*30 + (b.day-a.day);
    }
    printf("%d",ans);
}