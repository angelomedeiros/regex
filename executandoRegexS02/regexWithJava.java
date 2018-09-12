import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class regexWithJava {
  public static void main(String[] args) {
    String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    Pattern patternLetras = Pattern.compile("[a-f]");
    Matcher matcher = patternLetras.matcher(texto);
    
    while (matcher.find()) {
      System.out.printf("Posicoes: %s, %s\tValor: %s%n",
        matcher.start(),
        matcher.end(),
        matcher.group() 
      );
      // Posicoes: 20, 21	Valor: a
      // Posicoes: 22, 23	Valor: b
      // Posicoes: 24, 25	Valor: c
      // Posicoes: 26, 27	Valor: d
      // Posicoes: 28, 29	Valor: e
      // Posicoes: 30, 31	Valor: f
    }
    System.out.println(texto.replaceAll("[7-9]", "Achei")); // 0,1,2,3,4,5,6,Achei,Achei,Achei,a,b,c,d,e,f   
  }
}