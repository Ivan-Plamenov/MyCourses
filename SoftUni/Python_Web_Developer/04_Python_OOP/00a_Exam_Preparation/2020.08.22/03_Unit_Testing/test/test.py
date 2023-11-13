# 66/100
import unittest
from project.student_report_card import StudentReportCard


class TestStudentReportCard(unittest.TestCase):
    def test_initialization(self):
        report_card = StudentReportCard("John Doe", 5)
        self.assertEqual(report_card.student_name, "John Doe")
        self.assertEqual(report_card.school_year, 5)
        self.assertEqual(report_card.grades_by_subject, {})

    def test_valid_student_name(self):
        report_card = StudentReportCard("Jane Doe", 6)
        self.assertEqual(report_card.student_name, "Jane Doe")

    def test_empty_student_name(self):
        with self.assertRaises(ValueError):
            StudentReportCard("", 6)

    def test_valid_school_year(self):
        report_card = StudentReportCard("John Doe", 7)
        self.assertEqual(report_card.school_year, 7)

    def test_invalid_school_year(self):
        with self.assertRaises(ValueError):
            StudentReportCard("John Doe", 13)

    def test_add_grade(self):
        report_card = StudentReportCard("John Doe", 5)
        report_card.add_grade("Math", 90)
        report_card.add_grade("Science", 85)
        self.assertEqual(report_card.grades_by_subject["Math"], [90])
        self.assertEqual(report_card.grades_by_subject["Science"], [85])

    def test_average_grade_by_subject(self):
        report_card = StudentReportCard("John Doe", 5)
        report_card.add_grade("Math", 90)
        report_card.add_grade("Math", 80)
        self.assertEqual(report_card.average_grade_by_subject(), "Math: 85.00")

    def test_average_grade_for_all_subjects(self):
        report_card = StudentReportCard("John Doe", 5)
        report_card.add_grade("Math", 90)
        report_card.add_grade("Science", 80)
        self.assertEqual(
            report_card.average_grade_for_all_subjects(), "Average Grade: 85.00"
        )

    def test_repr(self):
        report_card = StudentReportCard("John Doe", 5)
        report_card.add_grade("Math", 90)
        expected_repr = "Name: John Doe\nYear: 5\n----------\nMath: 90.00\n----------\nAverage Grade: 90.00"
        self.assertEqual(repr(report_card), expected_repr)


if __name__ == "__main__":
    unittest.main()
