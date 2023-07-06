#include <iostream>
#include <cmath>

#define F_WITH_ERROR 0

#define PRINT_BISECT_N 0
#define BISECT_N_WITH_TRUNC 0
#define PRINT_HORDA_N 1
#define HORDA_N_WITH_TRUNC 1

#define TOLERANCE 0.0001


double Round(double X, double Delta)
{
    if (Delta <= 1E-9)
    {
        puts("Rounding precision set incorrectly\n");
        char c;
        std::cin >> c;
        exit(0);
    }

    if (X > 0.0)
    {
        return (Delta * (long((X / Delta) + 0.5)));
    }
    else
    {
        return (Delta * (long((X / Delta) - 0.5)));
    }
}

double Trunc(double X, double Tolerance)
{
    return Tolerance * long((X / Tolerance));
}

double F(double x, double c)
{
    // c * csch(x) - 0.5
    return c * (2.0 / (exp(x) - exp(-x))) - 0.5;
}

double F_Trunc(double x, double c, double Tolerance)
{
    return Trunc(F(x, c), Tolerance);
}

double F_diff(double x, double c)
{
    // -c * cth(x) * csch(x)
    return -c * ((exp(x) + exp(-x)) / (exp(x) - exp(-x))) * (2.0 / (exp(x) - exp(-x)));
}

double Nu_Delta(double x, double c)
{
    return 1 / fabs(F_diff(x, c));
}

double BISECT(double Left, double Right, double Eps, double c, int& N)
{
    double E = fabs(Eps) * 2.0;
    double FLeft = F(Left, c);
    double FRight = F(Right, c);
    double X = (Left + Right) / 2.0;
    double Y;

    if (FLeft * FRight > 0.0)
    {
        puts("BISECT Interval set incorrectly\n");
        char c;
        std::cin >> c;
        exit(0);
    }

    if (Eps <= 0.0)
    {
        puts("BISECT Accuracy set incorrectly\n");
        char c;
        std::cin >> c;
        exit(0);
    }

    N = 0;
    if (FLeft == 0.0) return Left;
    if (FRight == 0.0) return Right;

    while ((Right - Left) >= E)
    {
        X = 0.5 * (Right + Left);
        Y = F(X, c);

        if (Y == 0.0) return (X);

        if (Y * FLeft < 0.0)
        {
            Right = X;
        }
        else
        {
            Left = X;
            FLeft = Y;
        }

        N++;
    };

    return(X);
}

double BISECT_ITER(double Left, double Right, double Eps, double c, int N)
{
    double E = fabs(Eps) * 2.0;
    double FLeft = F(Left, c);
    double FRight = F(Right, c);
    double X = (Left + Right) / 2.0;
    double Y;

    if (FLeft * FRight > 0.0)
    {
        puts("BISECT Interval set incorrectly\n");
        char c;
        std::cin >> c;
        exit(0);
    }

    if (Eps <= 0.0)
    {
        puts("BISECT Accuracy set incorrectly\n");
        char c;
        std::cin >> c;
        exit(0);
    }

    if (FLeft == 0.0) return Left;
    if (FRight == 0.0) return Right;

    int Iteration = 0;
    while (Iteration < N)
    {
        X = 0.5 * (Right + Left);

#if BISECT_N_WITH_TRUNC
        Y = F_Trunc(X, c, TOLERANCE);
#else
        Y = F(X, c);
#endif

#if PRINT_BISECT_N
        std::cout << X << " " << Y << std::endl;
#endif

        if (Y == 0.0) return (X);

        if (Y * FLeft < 0.0)
        {
            Right = X;
        }
        else
        {
            Left = X;
            FLeft = Y;
        }

        Iteration++;
    };

    return(X);
}

double HORDA(double Left, double Right, double Eps, double c, int& N)
{
    double FLeft = F(Left, c);
    double FRight = F(Right, c);
    double X, Y;

    if (FLeft * FRight > 0.0)
    {
        puts("HORDA Interval set incorrectly\n");
        char c;
        std::cin >> c;
        exit(1);
    }
    if (Eps <= 0.0)
    {
        puts("HORDA Accuracy set incorrectly\n");
        char c;
        std::cin >> c;
        exit(1);
    }

    N = 0;
    if (FLeft == 0.0) return Left;
    if (FRight == 0.0) return Right;
    
    do
    {
        X = Left - (Right - Left) * FLeft / (FRight - FLeft);
        Y = F(X, c);

        if (Y == 0.0) return X;
        if (Y * FLeft < 0.0)
        {
            Right = X;
            FRight = Y;
        }
        else
        {
            Left = X;
            FLeft = Y;
        }

        N++;
    } while (fabs(Y) >= Eps);

    return X;
}

double HORDA_ITER(double Left, double Right, double Eps, double c, int N)
{
    double FLeft = F(Left, c);
    double FRight = F(Right, c);
    double X, Y;

    if (FLeft * FRight > 0.0)
    {
        puts("HORDA Interval set incorrectly\n");
        char c;
        std::cin >> c;
        exit(1);
    }
    if (Eps <= 0.0)
    {
        puts("HORDA Accuracy set incorrectly\n");
        char c;
        std::cin >> c;
        exit(1);
    }

    if (FLeft == 0.0) return Left;
    if (FRight == 0.0) return Right;

    int Iteration = 0;
    do
    {
        X = Left - (Right - Left) * FLeft / (FRight - FLeft);

#if HORDA_N_WITH_TRUNC
        Y = F_Trunc(X, c, TOLERANCE);
#else
        Y = F(X, c);
#endif

#if PRINT_HORDA_N
        std::cout << X << " " << Y << std::endl;
#endif

        if (Y == 0.0) return X;
        if (Y * FLeft < 0.0)
        {
            Right = X;
            FRight = Y;
        }
        else
        {
            Left = X;
            FLeft = Y;
        }

        Iteration++;
    } while (Iteration < N);

    return X;
}


int main()
{
    double c = 0.0;
    std::cout << "\nC = ";
    std::cin >> c;

    double delta = 0.0;
    std::cout << "Delta = ";
    std::cin >> delta;

    double eps = 0.0;
    std::cout << "Eps = ";
    std::cin >> eps;


    int N_Bisect = 0;
    double root_Bisect = 0;
    double root_n_Bisect = 0;

    int N_Horda = 0;
    double root_Horda = 0;
    double root_n_Horda = 0;

    if (c >= 0)
    {
#if F_WITH_ERROR
        root_Bisect = Round(BISECT(1E-9, 5, eps, c, N_Bisect), delta);
        root_n_Bisect = BISECT_ITER(1E-9, 5, eps, c, 80);

        root_Horda = Round(HORDA(1, 5, eps, c, N_Horda), delta);
        root_n_Horda = HORDA_ITER(1, 5, eps, c, 80);
#else
        root_Bisect = BISECT(1E-9, 5, eps, c, N_Bisect);
        root_n_Bisect = BISECT_ITER(1E-9, 5, eps, c, 80);

        root_Horda = HORDA(1, 5, eps, c, N_Horda);
        root_n_Horda = HORDA_ITER(1, 5, eps, c, 80);
#endif
    }
    else
    {
#if F_WITH_ERROR
        root_Bisect = Round(BISECT(-5, -1E-9, eps, c, N_Bisect), delta);
        root_n_Bisect = BISECT_ITER(-5, -1E-9, eps, c, 80);

        root_Horda = Round(HORDA(-5, -1, eps, c, N_Horda), delta);
        root_n_Horda = HORDA_ITER(-5, -1, eps, c, 80);
#else
        root_Bisect = BISECT(-5, -1E-9, eps, c, N_Bisect);
        root_n_Bisect = BISECT_ITER(-5, -1E-9, eps, c, 80);

        root_Horda = HORDA(-5, -1, eps, c, N_Horda);
        root_n_Horda = HORDA_ITER(-5, -1, eps, c, 80);
#endif
    }

    std::cout << "X_bisect = " << root_Bisect << std::endl;
    std::cout << "Y_bisect = " << F(root_Bisect, c) << std::endl;
    std::cout << "N_bisect = " << N_Bisect << std::endl;

    std::cout << "X_horda = " << root_Horda << std::endl;
    std::cout << "Y_horda = " << F(root_Horda, c) << std::endl;
    std::cout << "N_horda = " << N_Horda << std::endl;

    std::cout << "X_n_bisect(80) = " << root_n_Bisect << std::endl;
    std::cout << "Y_n_bisect(80) = " << F(root_n_Bisect, c) << std::endl;

    std::cout << "X_n_horda(80) = " << root_n_Horda << std::endl;
    std::cout << "Y_n_horda(80) = " << F(root_n_Horda, c) << std::endl;

    std::cout << "Nu_delta_bisect = " << Nu_Delta(root_Bisect, c) << std::endl;
    std::cout << "Nu_delta_n_bisect = " << Nu_Delta(root_n_Bisect, c) << std::endl;

    std::cout << "Nu_delta_horda = " << Nu_Delta(root_Horda, c) << std::endl;
    std::cout << "Nu_delta_n_horda = " << Nu_Delta(root_n_Horda, c) << std::endl;

    std::cout << "Nu_delta_max = " << eps / delta << std::endl;


    std::cin >> c;
    return 0;
}

