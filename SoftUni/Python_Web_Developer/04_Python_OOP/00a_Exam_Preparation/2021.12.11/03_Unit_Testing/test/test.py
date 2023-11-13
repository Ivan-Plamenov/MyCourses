# 68 / 100
import unittest
from project.team import Team


class TestTeam(unittest.TestCase):
    def setUp(self):
        self.team = Team("Eagles")

    def test_initialization(self):
        self.assertEqual(self.team.name, "Eagles")
        self.assertEqual(self.team.members, {})

    def test_valid_name_setter(self):
        self.team.name = "Falcons"
        self.assertEqual(self.team.name, "Falcons")

    def test_invalid_name_setter(self):
        with self.assertRaises(ValueError):
            self.team.name = "123"

    def test_add_member(self):
        result = self.team.add_member(John=30)
        self.assertIn("John", self.team.members)
        self.assertEqual(result, "Successfully added: John")

    def test_add_multiple_members(self):
        result = self.team.add_member(Jane=25, Mike=35)
        self.assertIn("Jane", self.team.members)
        self.assertIn("Mike", self.team.members)
        self.assertEqual(result, "Successfully added: Jane, Mike")

    def test_remove_member_existing(self):
        self.team.add_member(Alice=28)
        result = self.team.remove_member("Alice")
        self.assertNotIn("Alice", self.team.members)
        self.assertEqual(result, "Member Alice removed")

    def test_remove_member_non_existing(self):
        result = self.team.remove_member("Bob")
        self.assertEqual(result, "Member with name Bob does not exist")

    def test_greater_than(self):
        other_team = Team("Hawks")
        self.team.add_member(John=30)
        other_team.add_member(Jane=25)
        other_team.add_member(Mike=35)
        self.assertTrue(other_team > self.team)

    def test_len(self):
        self.team.add_member(John=30)
        self.team.add_member(Jane=25)
        self.assertEqual(len(self.team), 2)

    def test_addition(self):
        other_team = Team("Hawks")
        new_team = self.team + other_team
        self.assertEqual(new_team.name, "EaglesHawks")

    def test_str(self):
        self.team.add_member(Jane=25)
        expected_str = "Team name: Eagles\nMember: Jane - 25-years old"
        self.assertEqual(str(self.team), expected_str)


if __name__ == "__main__":
    unittest.main()
