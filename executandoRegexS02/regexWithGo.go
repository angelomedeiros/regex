package main

import (
	"regexp"
	"fmt"
	"bytes"
)

func main(){
	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"
	regex9, _ := regexp.Compile("9")
	fmt.Println(regex9.MatchString(texto)) // true
	fmt.Println(regex9.FindString(texto)) // 9
	fmt.Println(regex9.FindStringIndex(texto)) // [18 19]

	regexLetras, _ := regexp.Compile("[a-f]")
	fmt.Println(regexLetras.FindAllString(texto, 20)) // [a b c d e f]
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei")) // 0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei

	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper)
	fmt.Println(string(resultado)) // 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
}