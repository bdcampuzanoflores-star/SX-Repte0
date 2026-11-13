import javax.swing.JOptionPane;

public class ErrorCodigo {
    public static void main(String[] args) {

        try {
            int numero = 10 / 0;

        } catch (ArithmeticException e) {
            System.out.println("Error: No se puede dividir entre cero.");

            JOptionPane.showMessageDialog(null,
                "No se puede dividir entre cero.",
                "Error",
                JOptionPane.ERROR_MESSAGE);
        }
    }
}
